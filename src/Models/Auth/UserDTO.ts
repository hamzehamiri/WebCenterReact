import {RoleDTO} from "./RoleDTO.ts";

export class UserDTO {
    public static readonly Id_Key: string = "id";
    public static readonly UserName_Key: string = "userName";

    id?: number;
    userName?: string;
    roles?: Array<RoleDTO>;


    constructor(id: number, userName: string, roles: Array<RoleDTO>) {
        this.id = id;
        this.userName = userName;
        this.roles = roles;
    }
}