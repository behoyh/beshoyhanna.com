import { ProfileModel } from "./profile.model";

export class SetUser{
    public static readonly type = '[app] set user';

    constructor(public payload: ProfileModel)
    {

    }
}