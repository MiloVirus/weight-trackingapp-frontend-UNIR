import { useState } from "react";

type UseToggleHookReturnType = [boolean, () => void];

const useToggleHook = (initialState: boolean): UseToggleHookReturnType =>
{
    const [active, setActive] = useState(initialState)

    const handleToggle = () => setActive(!active)

    return[
        active,
        handleToggle
    ]
}

export default useToggleHook