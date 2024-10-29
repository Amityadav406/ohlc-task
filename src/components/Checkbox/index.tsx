import React from 'react'

interface CheckboxProps {
    title: string;
    [rest: string]: any;
}

export const Checkbox = ({
    title,
    ...rest
}: CheckboxProps) => {
    return (
        <label className="flex items-center">
            <input
                type="checkbox"
                className="mr-2"
                {...rest}
            />
            {title}
        </label>
    )
}

export default Checkbox