import React, {ReactNode, useState} from "react"

interface SwitchProps {
    checked: boolean
    onChange?: (checked: boolean) => void
    checkedChildren?: ReactNode
    unCheckedChildren?: ReactNode
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange, checkedChildren, unCheckedChildren}) => {
    const [isToggled, setIsToggled] = useState<boolean>(checked)
    const onToggle = () => {
        setIsToggled(!isToggled)
        if (onChange) {
            onChange(!isToggled)
        }
    }

    return (
        <label className="switch">
            <input type="checkbox" checked={isToggled} onChange={onToggle}/>
            <span className="slider round">
                <div className="ml-1">{ isToggled && checkedChildren }</div>
                <div className="absolute top-0 bottom-0 right-1">{ !isToggled && unCheckedChildren }</div>
            </span>
        </label>
    )
}

export default Switch