const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <Outlet />

        </div>
      </div>
    </>
  );
};


export default MainLayout;