const InputError = ({ messages = [], className = '' }) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <p className={`${className}`} key={index}>
                        {message}
                    </p>
                ))}
            </>
        )}
    </>
)

export default InputError
