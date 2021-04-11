import React, {useState} from "react"

interface SwitchProps {
    checked: boolean
    onChange?: (checked: boolean) => void
}

const Switch: React.FC<SwitchProps> = ({ checked, onChange }) => {

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
            <span className="slider round"/>
        </label>
    )
}

export default Switch