
// Website Buttons
function Button({ variant='primary', children, className='', ...props }) {
    const baseStyles = 'shadow-sm rounded-md focus:outline-none py-1.5';

    const variants = {
        primary: 'text-white bg-[#6f79d9] px-4 hover:bg-[#5c68c9] active:bg-[#4a56b8] transition-all duration-300',
        light: 'px-3 text-[#6c6a63] hover:bg-[#f1efec] active:bg-[#f1efecb2] transition-colors duration-200'
    };

    return (
        <button
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
        >
        {children}
        </button>
    )
}


export default Button;

