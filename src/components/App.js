import React, { useCallback, useEffect, useState } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import { api } from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import ImagePopup from "./ImagePopup";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import InfoTooltip from "./InfoTooltip";
import * as auth from "../utils/auth";
import success from "../images/success.png";
import fail from "../images/fail.png";

function App() {
    const navigate = useNavigate();

    const [logIn, setLogIn] = useState(false);
    const [email, setEmail] = useState("");
    const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
    const [message, setMessage] = useState({ imgResult: "", text: "" });
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});
    const [cards, setCards] = useState([]);
    const [currentUser, setCurrentUser] = useState({});

    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    };

    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setIsAddPlacePopupOpen(true);
    };

    const handleCardClick = (card) => {
        setSelectedCard(card);
    };

    const onLogOut = () => {
        localStorage.removeItem("jwt");
        setLogIn(false);
    };

    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard({});
        setIsInfoTooltipOpen(false);
    };

    const handleCardLike = (card) => {
        const isLiked = card.likes.some((i) => i._id === currentUser._id);
        api.changeLikeCardStatus(card._id, !isLiked)
            .then((newCard) => {
                setCards((state) =>
                    state.map((с) => (с._id === card._id ? newCard : с))
                );
            })
            .catch((err) => console.log(err));
    };

    const handleCardDelete = (card) => {
        api.deleteCard(card._id)
            .then(() => {
                setCards(cards.filter((element) => element._id !== card._id));
            })
            .catch((err) => console.log(err));
    };

    const onUpdateUser = ({ name, about }) => {
        api.updateUserInfo({ name, about })
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    };

    const onUpdateAvatar = ({ avatar }) => {
        api.changeUserAvatar({ avatar })
            .then((data) => {
                setCurrentUser(data);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    };

    const handleAddPlaceSubmit = ({ place, link }) => {
        api.addNewCard({ place, link })
            .then((newCard) => {
                setCards([newCard, ...cards]);
                closeAllPopups();
            })
            .catch((err) => console.log(err));
    };

    React.useEffect(() => {
        Promise.all([api.getCards(), api.getUserInfo()])
            .then(([cardsData, data]) => {
                setCards(cardsData);
                setCurrentUser(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleTokenCheck = useCallback(() => {
        const jwt = localStorage.getItem("jwt");
        if (jwt) {
            auth.getContent(jwt)
                .then((userData) => {
                    if (userData) {
                        setLogIn(true);
                        setEmail(userData.data.email);
                        navigate("/", { replace: true });
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, [navigate]);

    useEffect(() => {
        handleTokenCheck();
        logIn &&
            Promise.all([api.getUserInfo(), api.getCards()])
                .then(([userData, cardsData]) => {
                    setCurrentUser(userData);
                    setCards(cardsData);
                })
                .catch((err) => {
                    console.log(err);
                });
    }, [logIn, handleTokenCheck]);

    const handleRegist = (email, password) => {
        auth.register(email, password)
            .then((res) => {
                setEmail(res.data.email);
                setMessage({
                    imgResult: success,
                    text: "Вы успешно зарегистрировались!",
                });
            })
            .catch(() =>
                setMessage({
                    imgResult: fail,
                    text: "Что-то пошло не так! Попробуйте еще раз.",
                })
            )
            .finally(() => setIsInfoTooltipOpen(true));
    };

    const handleAuth = (email, password) => {
        auth.authorization(email, password)
            .then((data) => {
                if (data.token) {
                    setEmail(email);
                    setLogIn(true);
                    localStorage.setItem('jwt', data.token)
                    navigate("/");
                }
                })
            .catch((err) => {
                console.log(err);
            });

        // const handleLogOut =() => {
        //     setLogIn(false)
        //     localStorage.removeItem('jwt')
        //     navigate('sign-in', { replace: true })
        //     setEmail('')
        //     setLogIn('')
        // }
    };
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <div className="page">
                <Header logIn={logIn} email={email} onLogOut={onLogOut} />
                <Routes>
                    <Route
                        path="sign-up"
                        element={
                            <Register name="regist" onRegist={handleRegist} />
                        }
                    />

                    <Route
                        path="sign-in"
                        element={<Login name="login" onAuth={handleAuth} />}
                    />

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute
                                exact
                                path="/"
                                logIn={logIn}
                                element={Main}
                                onEditAvatar={handleEditAvatarClick}
                                onEditProfile={handleEditProfileClick}
                                onAddPlace={handleAddPlaceClick}
                                onCardClick={handleCardClick}
                                onCardLike={handleCardLike}
                                onCardDelete={handleCardDelete}
                                cards={cards}
                            />
                        }
                    />
                </Routes>
                <Footer />

                <InfoTooltip
                    name="tooltip"
                    isOpen={isInfoTooltipOpen}
                    onClose={closeAllPopups}
                    title={message.text}
                    imgResult={message.imgResult}
                />

                <EditProfilePopup
                    isOpen={isEditProfilePopupOpen}
                    onClose={closeAllPopups}
                    onUpdateUser={onUpdateUser}
                />
                <EditAvatarPopup
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    onUpdateAvatar={onUpdateAvatar}
                />

                <AddPlacePopup
                    isOpen={isAddPlacePopupOpen}
                    onClose={closeAllPopups}
                    onAddPlace={handleAddPlaceSubmit}
                />

                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
