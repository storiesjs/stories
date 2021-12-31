declare global {
    type ShadowRootMode = "open" | "closed";

    interface ShadowRootInit {
        mode: ShadowRootMode;
        delegatesFocus?: boolean;
    }
}