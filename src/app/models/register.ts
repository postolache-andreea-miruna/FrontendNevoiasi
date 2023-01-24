export class Register{
    public Email : string | undefined;
    public Password : string | undefined;
    public RoleId : string | undefined;

    //constructor pt datele din formular
    public constructor(init: Register) //pot s aii dau un ob doar cu o parte din proprietati
    {
        Object.assign(this, init);
    }
}