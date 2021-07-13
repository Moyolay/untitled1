import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav, Form, Button, FormControl} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {START_ROUTE} from "../utils/Consts";

const Navbarr = () => {
    const user = useContext(Context)
    return (
        <div>
            <Navbar bg="light" variant="light">
                <NavLink style={{color: 'black'}} to={START_ROUTE}>Единый реестр страховых карт</NavLink>
                {user.isAuth && user.isUser('ADMIN') ?
                    <Nav className="ml-auto">
                        <Button>Админ панель</Button>
                        <Button>Регистрация нового агента</Button>
                        <Button>Выход</Button>
                    </Nav>
                    : user.isAuth && user.isUser('USER') ?
                    <Nav className="ml-auto">
                        <Button></Button>
                        <Button>Регистрация новой карты</Button>
                        <Button>Выход</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button>Стартовая страница</Button>
                        <Button>Вход</Button>
                    </Nav>
                }
            </Navbar>
        </div>
    );
};

export default Navbarr;
