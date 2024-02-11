function cliendId(id?: string): string | null {
    id !== undefined && localStorage.setItem("client_id", id);
    return localStorage.getItem("client_id");
}

export default cliendId;