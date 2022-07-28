export default function Footer() {
  return (
    <footer className="w-full h-auto  bg-gray-200 dark:bg-gray-300 p-6 space-y-2 pt-2 pb-20 md:flex md:justify-between md:px-20 md:pb-1 items-center" id="footer">
      <div>
        <p className="text-lg dark:text-gray-900">Acerca de</p>
        <p className="text-sm text-gray-500">Emociones</p>
        <p className="text-sm text-gray-500">Hábitos</p>
        <p className="text-sm text-gray-500">Términos y Condiciones</p>
      </div>
      <div className="dark:text-gray-900">
        <span className="text-gray-900 font-bold text-base mr-2">AppEmotions, Inc.</span>&copy; {new Date().getFullYear()} All Rights Reversed
      </div>
    </footer>
  );
}
