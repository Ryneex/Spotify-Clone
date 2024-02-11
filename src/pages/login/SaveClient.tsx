import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import cliendId from "@/utils/clientId";
import { FormEvent, useState } from "react";

const SaveClient = () => {
    const [open, setOpen] = useState(false);
    function setClientId(e: FormEvent) {
        e.preventDefault();
        cliendId(e.target[0].value || "");
        setOpen(false);
    }
    return (
        <Dialog
            onOpenChange={(e) => setOpen(e)}
            open={open}
        >
            <DialogTrigger asChild>
                <Button className="fixed top-4 left-4 bg-blue-500">Client ID</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] p-4">
                <form
                    onSubmit={setClientId}
                    className="flex flex-col gap-2"
                >
                    <span className="font-medium text-zinc-700">Client ID</span>
                    <Input
                        defaultValue={cliendId() || ""}
                        placeholder="Enter your Client ID"
                        className="border-zinc-300"
                    />
                    <a href="https://github.com/Ryneex/Spotify-Clone?tab=readme-ov-file#guide" target="_blank" className="text-sm text-indigo-500">How do i get it?</a>
                    <Button
                        className="w-fit h-8 px-5 ml-auto"
                        type="submit"
                    >
                        Save
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default SaveClient;
