import React, { useEffect, useState } from "react";
import { Meta, Stories } from "./types";

export function useStory(file: any) {
    const [meta, setMeta] = useState<Meta<any> | undefined>();
    const [stories, setStories] = useState<Stories>({});

    useEffect(() => {
        if (file) {
            const _stories: Stories = {};
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