const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="mx-aour py-10">
        <div className="text-center text-xs text-black">
          &copy; {new Date().getFullYear()} StoreName, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
