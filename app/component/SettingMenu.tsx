import { motion } from "framer-motion";
import { useRouter } from "next/navigation";


export const SettingMenu = () => {
  const router = useRouter()

  return (
    <motion.div className="flex flex-col justify-center items-center gap-2 fixed bottom-3 right-12 w-64 bg-white z-40 rounded-xl p-4 bg-opacity-25">
    <h3 className="font-bold text-white">Theme</h3>
      <button 
      onClick={() => {
        localStorage.setItem("theme", 'aqua')
        location.reload()
      }}
      className="bg-aqua rounded-lg w-full font-bold bg-opacity-50 hover:bg-opacity-100">Aqua</button>
      <button 
       onClick={() => {
        localStorage.setItem("theme", 'cyber')
        location.reload()
      }}
      className="bg-elegantPink rounded-lg w-full w-full font-bold bg-opacity-50 hover:bg-opacity-100">
        Cyber
      </button>
      {/* <button 
       onClick={() => {
        localStorage.setItem("theme", 'crazy')
        location.reload()
      }}
      className="bg-customGrey rounded-lg w-full w-full font-bold bg-opacity-50 hover:bg-opacity-100">?</button> */}
    </motion.div>
  );
};
