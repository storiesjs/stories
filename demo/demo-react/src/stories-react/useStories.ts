import { useEffect, useState } from "react";
import { type } from "../stories-api";

export function useStory(file: any) {
    const [meta, setMeta] = useState<type.Meta<any> | undefined>();
    const [stories, setStories] = useState<type.Stories>({});

    useEffect(() => {
        if (file) {
            const _stories: type.Stories = {};
            Object.keys(file).forEach(key => {
                const data = file[key];
                if (key === 'default') {
                    setMeta(data);
                } else {
                    _stories[key] = data;
                }
            });
            // for (const key in file) {
            //     if (Object.prototype.hasOwnProperty.call(file, key)) {
            //         const data = file[key];
            //         if (key === 'default') {
            //             setMeta(data);
            //         } else {
            //             stories[key] = data;
            //         }
            //     }
            // }
            setStories(_stories);
        } else {
            setMeta(undefined);
            setStories({});
        }
    }, [file]);

    return {meta, stories};
}