import { Fragment, useState } from "react";

// Headless UI, for more info and examples you can check out https://github.com/tailwindlabs/headlessui
import { Menu, Transition } from "@headlessui/react";

export default function DarkSidebarFullContent({children}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [desktopSidebarOpen, setDesktopSidebarOpen] = useState(true);

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className={`flex flex-col mx-auto w-full min-h-screen bg-gray-100 ${
          desktopSidebarOpen ? "lg:pl-64" : ""
        }`}
      >
        {/* Page Sidebar */}
        <nav
          id="page-sidebar"
          aria-label="Main Sidebar Navigation"
          className={`flex flex-col fixed top-0 left-0 bottom-0 w-full lg:w-64 h-full bg-gray-800 text-gray-200 z-50 transform transition-transform duration-500 ease-out ${
            desktopSidebarOpen ? "lg:translate-x-0" : "lg:-translate-x-full"
          } ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
          {/* Sidebar Header */}
          <div className="h-16 bg-gray-600 bg-opacity-25 flex-none flex items-center justify-between lg:justify-center px-4 w-full">
            {/* Brand */}  
            <a href="#" className="inline-flex space-x-2 font-bold text-lg tracking-wide text-white hover:opacity-75">
              <span>Company</span>
            </a>
            {/* END Brand */}

            {/* Close Sidebar on Mobile */}
            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-transparent text-white opacity-75 hover:opacity-100 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:opacity-75"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <svg className="hi-solid hi-x inline-block w-4 h-4 -mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              </button>
            </div>
            {/* END Close Sidebar on Mobile */}
          </div>
          {/* END Sidebar Header */}

          {/* Sidebar Navigation */}
          <div className="overflow-y-auto">
            <div className="p-4 w-full">
              <nav className="space-y-1">
                <a href="#" className="flex items-center space-x-3 px-3 font-medium rounded text-gray-50 bg-gray-700 bg-opacity-60">
                  <span className="flex-none flex items-center opacity-50">
                    <svg className="hi-outline hi-home inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                  </span>
                  <span className="py-2 grow">Dashboard</span>
                  <span className="px-2 py-1 rounded-full text-xs font-medium leading-4 bg-opacity-10 text-gray-100 bg-gray-400">9</span>
                </a>
                <div className="px-3 pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400">Account</div>
                <a href="#" className="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40">
                  <span className="flex-none flex items-center opacity-50">
                    <svg className="hi-outline hi-user inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                  </span>
                  <span className="py-2 grow">Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40">
                  <span className="flex-none flex items-center opacity-50">
                    <svg className="hi-outline hi-cog inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </span>
                  <span className="py-2 grow">Settings</span>
                </a>
                <a href="#" className="flex items-center space-x-3 px-3 font-medium rounded text-gray-300 hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40">
                  <span className="flex-none flex items-center opacity-50">
                    <svg className="hi-outline hi-lock-open inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" /></svg>
                  </span>
                  <span className="py-2 grow">Log out</span>
                </a>
              </nav>
            </div>
          </div>
          {/* END Sidebar Navigation */}
        </nav>
        {/* Page Sidebar */}

        {/* Page Header */}
        <header
          id="page-header"
          className={`flex flex-none items-center h-16 bg-white shadow-sm fixed top-0 right-0 left-0 z-30 ${
            desktopSidebarOpen ? "lg:pl-64" : ""
          }`}
        >
          <div className="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
            {/* Left Section */}
            <div className="flex items-center space-x-2">
              {/* Toggle Sidebar on Desktop */}  
              <div className="hidden lg:block">
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                  onClick={() => setDesktopSidebarOpen(!desktopSidebarOpen)}
                >
                  <svg className="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
              </div>
              {/* END Toggle Sidebar on Desktop */}

              {/* Toggle Sidebar on Mobile */}
              <div className="lg:hidden">
                <button
                  type="button"
                  className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-6 rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none"
                  onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
                >
                  <svg className="hi-solid hi-menu-alt-1 inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
              </div>
              {/* END Toggle Sidebar on Mobile */}

              {/* Search */}
              <div className="hidden sm:block">
                <form>
                  <input type="text" className="w-full block border border-gray-200 rounded px-3 py-2 leading-5 text-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" id="search" name="search" placeholder="Search.." />
                </form>
              </div>
              <div className="sm:hidden">
                <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <svg className="hi-solid hi-search inline-block w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" /></svg>
                </button>
              </div>
              {/* END Search */}
            </div>
            {/* END Left Section */}

            {/* Right Section */}
            <div className="flex items-center space-x-2">
              {/* Notifications */}
              <button type="button" className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                <svg className="hi-outline hi-bell inline-block w-5 h-5" stroke="currentColor" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="text-blue-500">•</span>
              </button>
              {/* END Notifications */}

              {/* User Dropdown */}
              <Menu as="div" className="relative inline-block">
                {/* Dropdown Toggle Button */}
                <Menu.Button className="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none px-3 py-2 leading-5 text-sm rounded border-gray-300 bg-white text-gray-800 shadow-sm hover:text-gray-800 hover:bg-gray-100 hover:border-gray-300 hover:shadow focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:bg-white active:border-white active:shadow-none">
                  <span>Admin</span>
                  <svg className="hi-solid hi-chevron-down inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                </Menu.Button>
                {/* END Dropdown Toggle Button */}

                {/* Dropdown */}
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-150"
                  enterFrom="transform opacity-0 scale-75"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-75"
                >
                  <Menu.Items className="absolute right-0 origin-top-right mt-2 w-48 shadow-xl rounded z-1">
                    <div className="bg-white ring-1 ring-black ring-opacity-5 rounded divide-y divide-gray-100">
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                                active ? "text-gray-700 bg-gray-100" : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                              }`}
                            >
                              <svg className="hi-solid hi-user-circle inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" /></svg>
                              <span>Profile</span>
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                                active ? "text-gray-700 bg-gray-100" : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                              }`}
                            >
                              <svg className="hi-solid hi-inbox inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" /></svg>
                              <span>Inbox</span>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                                active ? "text-gray-700 bg-gray-100" : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                              }`}
                            >
                              <svg className="hi-solid hi-cog inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" /></svg>
                              <span>Settings</span>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="p-2 space-y-1">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={`flex items-center space-x-2 rounded py-2 px-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-700 ${
                                active ? "text-gray-700 bg-gray-100" : "text-gray-600 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:bg-gray-100 focus:text-gray-700"
                              }`}
                            >
                              <svg className="hi-solid hi-lock-closed inline-block w-5 h-5 opacity-50" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>  
                              <span>Sign out</span>
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
                {/* END Dropdown */}
              </Menu>
              {/* END User Dropdown */}
            </div>
            {/* END Right Section */}
          </div>
        </header>
        {/* END Page Header */}

        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full pt-16">
          {/* Page Section */}
          <div className="max-w-10xl mx-auto p-4 lg:p-8 w-full">
            { children }
          </div>
          {/* END Page Section */}
        </main>
        {/* END Page Content */}

        {/* Page Footer */}
        <footer id="page-footer" className="flex flex-none items-center bg-white">
          <div className="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">
            <div className="pt-4 pb-1 md:pb-4">
              <a href="https://indokoding.com" target="_blank" className="font-medium text-blue-600 hover:text-blue-400">Indokoding</a> ©
            </div>
            <div className="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
              <span>Automate Form Submission</span>
            </div>
          </div>
        </footer>
        {/* END Page Footer */}
      </div>
      {/* END Page Container */}
    </>
  )
}