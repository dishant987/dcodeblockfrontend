import { motion } from 'framer-motion'
import Button from './Button'

const Header = () => {
    return (
        <header className="sticky top-0 z-50 flex h-[75px] w-full items-center justify-between bg-black px-12 shadow-md">
            <div>
                <img src="/logodb-PhotoRoom 1.png" alt="logo" />
            </div>
            <Button name="Sign In" />

            {/* SVG Banner at the Bottom */}
            <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute bottom-0 left-0 w-full"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="auto" viewBox="0 0 1440 6" fill="none">
                    <path d="M0 6H75.5L88.5 4.5H198L210 6H331.5L337.5 3.5H667.5L673 6H1043.5L1050.5 3H1198H1440V0H0V6Z" fill="#B026FF" fillOpacity="0.5" />
                </svg>
            </motion.div>
        </header>
    )
}

export default Header