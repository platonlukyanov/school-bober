'use client'
import { Provider } from "jotai";

function JotaiProvider(props: React.PropsWithChildren) {
    return (
        <Provider>{props.children}</Provider>
    )
}

export default JotaiProvider;