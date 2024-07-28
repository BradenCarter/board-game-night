class PlayerAlreadyExistsError extends Error{
    constructor (message){
        super(message);
        this.name = "PlayerAlreadyExistsError";
        // this.errorCode = errorCode;
    }
}