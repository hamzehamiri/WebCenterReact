export class RoleDTO {
    public static readonly Id_Key: string = "id";
    public static readonly Name_Key: string = "name";

    id?: number;
    name?: string;


    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}