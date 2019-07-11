import React from 'react'
import './Palette.css'
const Palette = ({ colors, selected, onSelect }) => {
    const colorList = colors.map(
        (color) => (
            <Color
                key={color}
                color={color}
                active={color === selected}
                // onClick={onSelect}
                onClick={() => onSelect(color)}
            />
        )
    )

    return (
        <div className="palette">
            {colorList}
        </div>
    )
}

const Color = ({ color, active, onClick }) => {
    const styles = {
        background: color
    };

    return (
        <div className={`color ${active && 'active'}`} style={styles} onClick={onClick} ></div>
    )
}
export default Palette;