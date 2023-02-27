import React from "react";

export const Checkbox = React.forwardRef(({indeterminate, ...rest}, ref)=> {
    const defaultRef= React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(()=> {
        resolvedRef.current.indeterminae = indeterminate
    }, [resolvedRef, indeterminate])
    return (
        <>
            <input type='checkbox' 
                    ref={resolvedRef} {...rest}/>
        </>
    )
})