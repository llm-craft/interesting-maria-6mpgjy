import React, { useState, useEffect } from "react";

const pharmaciesData = [
  {
    name: "Pharmacie Al Ghofrane",
    address: "lotis el ouafaa 3,N 128, magasin 1, saknia, Kénitra",
    phone: "05373-85323",
    status: "open",
  },
  {
    name: "Pharmacie Zouhair",
    address: "Kénitra",
    phone: "05373-83436",
    status: "open",
  },
  {
    name: "KENIPHARMA",
    address: "Angle Rue Saad Zaghloul Et, Rue Moulay slimane, Kenitra 14000",
    phone: "05373-07000",
    status: "open",
  },
  {
    name: "Pharmacie Irchad",
    address: "6FR2+FJ8, Av. El Massira, Kénitra",
    phone: "05373-92900",
    status: "open",
  },
  {
    name: "Pharmacie Diour PAM",
    address: "6FX4+459, Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Cherkaoui",
    address: "6CRX+HG4, Kénitra",
    phone: "05373-92444",
    status: "open",
  },
  {
    name: "Pharmacie alboustane",
    address: "Bir Rami",
    phone: "0530-963339",
    status: "open",
  },
  {
    name: "Pharmacie al hamd",
    address: "Lotis maghreb El Arabi Bloc D,N°659, Kénitra 14006",
    phone: "05373-57473",
    status: "open",
  },
  {
    name: "صيدلية المصلى",
    address: "Kénitra",
    phone: "0700-805267",
    status: "open",
  },
  {
    name: "Pharmacie Hay al Wafa",
    address: "1130 Lotissement Wafa 4, Ain Sebaa, Kénitra",
    phone: "05373-85051",
    status: "open",
  },
  {
    name: "Pharmacie Hamza",
    address: "6CVW+QCR, Av. El Massira, Kénitra",
    phone: "05373-92136",
    status: "open",
  },
  {
    name: "pharmacie de garde kenitra livraison à domicile",
    address: "Rue de Séville, Kénitra 14000",
    phone: "0602-805818",
    status: "open",
  },
  {
    name: "Pharmacie El Andalous",
    address: "Av. Bacha Abdelhamid El Alaoui, Kénitra",
    phone: "05373-80622",
    status: "open",
  },
  {
    name: "Commendé Liya",
    address: "Av. El Massira, Kénitra 14040",
    phone: "0629-799982",
    status: "open",
  },
  {
    name: "صيدلية الأزهر Pharmacie Al Azhar",
    address: "69XW+H28, Kénitra",
    phone: "05373-63683",
    status: "open",
  },
  {
    name: "Pharmacie Sidi Larbi Boujemaâ",
    address: "272 Av. Mohamed V, Kénitra",
    phone: "05373-64898",
    status: "open",
  },
  {
    name: "Pharmacie kenitra",
    address: "53 Hay Al Amal, Kénitra",
    phone: "0624-289299",
    status: "open",
  },
  {
    name: "Pharmacie Du Passage",
    address: "133 Rue 206, Kénitra 14000",
    phone: "05373-63162",
    status: "open",
  },
  { name: "Parapharmacie", address: NaN, phone: "05373-77982", status: "open" },
  {
    name: "Pharmacie Sebou",
    address: "7C77+J6X, Kenitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Bab- Fès",
    address: "7C9Q+43C, Av. Mohamed V, Kénitra",
    phone: "05373-64664",
    status: "open",
  },
  {
    name: "Pharmacie Avicennes",
    address: "Av Said Daoudi, Quartier des Mimosas, 14080, Kenitra 14000",
    phone: "05373-74874",
    status: "open",
  },
  {
    name: "Pharmacie Centre Ville",
    address: "7C58+3P6, P4266, Kénitra",
    phone: "05373-76729",
    status: "open",
  },
  {
    name: "Pharmacie ismailia kenitra",
    address: "bloc G, l 355, Kénitra",
    phone: "05373-53616",
    status: "open",
  },
  {
    name: "Pharmacie REGRAGUI",
    address:
      "PHARAMACIE REGRAGUI, 8 Rue Yacoub El Mansour Quartier, 1400, Kenitra 14000",
    phone: "05373-61318",
    status: "open",
  },
  {
    name: "Parapharmacie GREEN BY S&H",
    address: NaN,
    phone: "0680-866807",
    status: "open",
  },
  {
    name: "Pharmacie Permanonece",
    address: "7C36+J9R, Rue Abdelaziz Boutaleb, Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "pharmacie SAOUMAÂ صيدلية الصومعة",
    address: "Kénitra",
    phone: "05373-57540",
    status: "open",
  },
  {
    name: "Pharmacie granada",
    address: "792Q+74R, Kenitra",
    phone: "05373-72606",
    status: "open",
  },
  {
    name: "Pharmacie DAR DOUA",
    address: "7C37+HFP, Kénitra",
    phone: "05373-60288",
    status: "open",
  },
  {
    name: "Pharmacie Ait El Cadi",
    address: "793P+63Q, Avenue E, Kénitra",
    phone: "05373-73433",
    status: "open",
  },
  {
    name: "Pharmacie hay el bohairae",
    address: NaN,
    phone: "0616-305719",
    status: "open",
  },
  {
    name: "Pharmacie de la Grande Avenue",
    address:
      "Lot 446 , Bir Rami Sud - Zone Industrielle - Rocade Sud, Kénitra 14000",
    phone: "05373-75430",
    status: "open",
  },
  {
    name: "Pharmacie Et Parapharmacie Du Rif",
    address: "6CX3+7VM, Av. 2 Mars, Kénitra",
    phone: "05373-63300",
    status: "open",
  },
  {
    name: "Pharmacie Firdaouss",
    address: "7C6C+QCX, Kenitra",
    phone: "05373-71679",
    status: "open",
  },
  {
    name: "Pharmacie Romanova",
    address: "Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Youssef Dr.Ahlam Benwahhoud.",
    address: "Route de Mehdia,lot Ismailia n°1777, Kénitra",
    phone: "05373-51605",
    status: "open",
  },
  {
    name: "Pharmacie Omar",
    address: "7CF2+45R, Kénitra",
    phone: "05373-66364",
    status: "open",
  },
  {
    name: "PHARMACIE HAY ESSALAM",
    address: "7C93+79M, Kénitra",
    phone: "05373-87810",
    status: "open",
  },
  {
    name: "Big para grossiste",
    address: NaN,
    phone: "05373-95007",
    status: "open",
  },
  {
    name: "Pharmacie Al Widad",
    address: "Unnamed Road, Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie De La Ville Haute",
    address: "15, Rue Jamil Sidki Zouhaoui, 14020, Kénitra 14000",
    phone: "05373-70453",
    status: "open",
  },
  {
    name: "Pharmacie Ghani",
    address: "Rue 1, Bir Rami 14000",
    phone: "05373-79806",
    status: "open",
  },
  {
    name: "Pharmacie moustachfa idrissi",
    address: "Kénitra",
    phone: "05373-73276",
    status: "open",
  },
  {
    name: "Pharmacie Rayane",
    address: "79CV+69X, Kénitra",
    phone: "05373-52957",
    status: "open",
  },
  {
    name: "Pharmacie Echam",
    address: "799R+G7G, Unnamed Road, Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Sanae",
    address: "798H+MJ6، Unnamed Road, Kenitra",
    phone: "05373-55655",
    status: "open",
  },
  {
    name: "Pharmacie des FAR",
    address: "7C3C+M6X, Ave des FAR, Kenitra",
    phone: "05373-66748",
    status: "open",
  },
  {
    name: "Pharmacie touijer ait oukhadda",
    address: "n 20, Zenqa 36, khabazat 14000",
    phone: "05373-76243",
    status: "open",
  },
  {
    name: "Pharmacie Hind",
    address:
      "Angle boulevard Youssef Ibn Tachfin et, Rue Farahat Hachad، hached 14000",
    phone: "05373-61296",
    status: "open",
  },
  {
    name: "Pharmacie Azzahrae",
    address: "792H+4VM, Kenitra",
    phone: "05373-55071",
    status: "open",
  },
  {
    name: "Pharmacie SARAH",
    address: "7C85+MRF, Av. Abou Bakr Seddik, Kénitra",
    phone: "05373-64541",
    status: "open",
  },
  {
    name: "Pharmacie Siham",
    address: "794P+79W, Kenitra",
    phone: "05373-60805",
    status: "open",
  },
  {
    name: "Pharmacie ezzoubair",
    address: "Bir Rami 14000",
    phone: "0530-210775",
    status: "open",
  },
  {
    name: "Pharmacie le Vallon",
    address: "798V+MV6 Le vallon, Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Venezia",
    address: "79GW+57H, Ismailia, Kenitra 14000",
    phone: "05373-55065",
    status: "open",
  },
  { name: "paracentrehm", address: NaN, phone: "0649-671593", status: "open" },
  {
    name: "Pharmacie principale al bassatine",
    address: "Unnamed Road, Kénitra",
    phone: "0660-915475",
    status: "open",
  },
  {
    name: "Pharmacie La Nouvelle Ville De Sidi Taibi",
    address: "Douar Ouled Nsar Gharbia, C/R Sidi Taibi, Kénitra 14000",
    phone: "05373-73447",
    status: "open",
  },
  {
    name: "Pharmacie Arrohama",
    address: "Lot 456 al wafa 1 souk sebt, Kenitra 14000",
    phone: "05373-83136",
    status: "open",
  },
  {
    name: "kenitra livraison Info",
    address: NaN,
    phone: "0626-611096",
    status: "open",
  },
  {
    name: "Pharmacie Benlahsen",
    address: "12 Rue Ibn Battouta, Kénitra 14000",
    phone: "05373-70350",
    status: "open",
  },
  {
    name: "Pharmacie Les IRIS",
    address: "79CP+WGC, Kénitra",
    phone: "05373-51718",
    status: "open",
  },
  {
    name: "Pharmacie Ahlane",
    address: "68WR+VHM, Unnamed Road, Kénitra",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Aljamai",
    address: "4, Av Hassan Ii, Hay Essalam Bloc F, Sidi Slimane, Kénitra 14000",
    phone: "05375-01850",
    status: "open",
  },
  {
    name: "Pharmacie Route Mehdia",
    address: "Lotiss. Azharoune, Lot 134 N°1, Kénitra 14000",
    phone: "05373-55407",
    status: "open",
  },
  {
    name: "Pharmacie Arsat Elcadi",
    address: "7C9Q+XXW, Av. Mohamed V, Kénitra 14000",
    phone: "05373-82309",
    status: "open",
  },
  {
    name: "Pharmacie Yaacoub صيدلية يعقوب",
    address:
      "Ouled Arfa. Saknia, Lotissement Al Andalous. N 385, Kénitra 14000",
    phone: "N/A",
    status: "open",
  },
  {
    name: "Pharmacie Mimosas / صيدلية ميموزة",
    address: "Av. Mohamed V, Kénitra",
    phone: "05373-74523",
    status: "open",
  },
  {
    name: "Pharmacie Amine",
    address: "69VP+7PP, Kénitra",
    phone: "0665-306388",
    status: "open",
  },
];

const App = () => {
  const [pharmacies, setPharmacies] = useState(pharmaciesData);
  const [currentPage, setCurrentPage] = useState("home");
  const [adminCredentials, setAdminCredentials] = useState({
    username: "",
    password: "",
  });
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = () => {
    if (
      adminCredentials.username === "admin" &&
      adminCredentials.password === "Kenitrapro@1979**"
    ) {
      setCurrentPage("admin");
    } else {
      alert("Invalid credentials");
    }
  };

  const updatePharmacyStatus = (index: number, newStatus: string) => {
    const updatedPharmacies = [...pharmacies];
    updatedPharmacies[index].status = newStatus;
    setPharmacies(updatedPharmacies);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div
      className={`min- bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}
    >
      <header className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 text-white flex justify-between items-center">
        <h1 className="text-2xl font-bold">Pharmacy on Guard</h1>
        <div className="flex items-center">
          <button
            onClick={() => setCurrentPage("home")}
            className="mx-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage("login")}
            className="mx-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            Admin
          </button>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="mx-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded"
          >
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </header>
      <main className="p-8">
        {currentPage === "home" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Real-Time Pharmacies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pharmacies.map((pharmacy, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {pharmacy.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Address: {pharmacy.address || "N/A"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Phone: {pharmacy.phone || "N/A"}
                  </p>
                  <p
                    className={`text-${
                      pharmacy.status === "open" ? "green" : "red"
                    }-500 font-semibold`}
                  >
                    {pharmacy.status.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {currentPage === "login" && (
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-6">Admin Login</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium mb-2"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={adminCredentials.username}
                  onChange={(e) =>
                    setAdminCredentials({
                      ...adminCredentials,
                      username: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={adminCredentials.password}
                  onChange={(e) =>
                    setAdminCredentials({
                      ...adminCredentials,
                      password: e.target.value,
                    })
                  }
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg"
              >
                Login
              </button>
            </form>
          </div>
        )}
        {currentPage === "admin" && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Admin Panel</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pharmacies.map((pharmacy, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {pharmacy.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Address: {pharmacy.address || "N/A"}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    Phone: {pharmacy.phone || "N/A"}
                  </p>
                  <div className="flex items-center">
                    <p
                      className={`text-${
                        pharmacy.status === "open" ? "green" : "red"
                      }-500 font-semibold mr-4`}
                    >
                      {pharmacy.status.toUpperCase()}
                    </p>
                    <select
                      value={pharmacy.status}
                      onChange={(e) =>
                        updatePharmacyStatus(index, e.target.value)
                      }
                      className="p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="open">Open</option>
                      <option value="closed">Closed</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
      <footer className="bg-gray-200 dark:bg-gray-800 text-center p-4 mt-8">
        <p>&copy; 2023 Pharmacy on Guard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
