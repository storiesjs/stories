import React, { useEffect, useState } from "react";
import { Meta, Stories } from "./types";

export function useStory(file: any) {
    const [meta, setMeta] = useState<Meta<any> | undefined>();
    const [stories, setStories] = useState<Stories>({});

    useEffect(() => {
        if (file) {
            const stories: Stories = {};
            for (const key in file) {
                if (Object.prototype.hasOwnProperty.call(file, key)) {
                    const data = file[key];
                    if (key === 'default') {
                        setMeta(data);
                    } else {
                        stories[key] = data;
                    }
                }
            }
            setStories(stories);
        } else {
            setMeta(undefined);
            setStories({});
        }
    }, [file]);

    return {meta, stories};
}