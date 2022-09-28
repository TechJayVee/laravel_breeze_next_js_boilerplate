const AuthSessionStatus = ({ status, className, ...props }) => (
    <>
        {status && (
            <div className={`${className}`} {...props}>
                {status}
            </div>
        )}
    </>
)

export default AuthSessionStatus
