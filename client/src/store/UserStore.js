import {makeAutoObservable} from "mobx";

export  default class UserStore {
    constructor() {
        this._isAuth = false
        this._user = {}
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._isAuth= bool
    }
    setIsAuth(user) {
        this._user= user
    }

    get isAuth() {
        return true//this._isAuth
    }
    get isUser() {
        return //this._user
    }
}
