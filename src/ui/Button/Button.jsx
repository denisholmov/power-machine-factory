import Arrow from "../"

export const Button = ({text, arrow}) => {


    return(<button>
        {text}
        {arrow && <Arrow/>}
        </button>)
}


