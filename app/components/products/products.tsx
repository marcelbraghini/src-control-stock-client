export function Products() {
  const stockData = [
    {
      action: "Produto A",
      code: "A001",
      trayStock: 100,
      amazonStock: 50,
    },
    {
      action: "Produto B",
      code: "B002",
      trayStock: 200,
      amazonStock: 150,
    },
    {
      action: "Produto C",
      code: "C003",
      trayStock: 300,
      amazonStock: 250,
    },
    {
      action: "Produto D",
      code: "D004",
      trayStock: 400,
      amazonStock: 350,
    },
    {
      action: "Produto E",
      code: "E005",
      trayStock: 500,
      amazonStock: 450,
    },
    {
      action: "Produto F",
      code: "F006",
      trayStock: 600,
      amazonStock: 550,
    },
    {
      action: "Produto G",
      code: "G007",
      trayStock: 700,
      amazonStock: 650,
    },
    {
      action: "Produto H",
      code: "H008",
      trayStock: 800,
      amazonStock: 750,
    },
    {
      action: "Produto I",
      code: "I009",
      trayStock: 900,
      amazonStock: 850,
    },
    {
      action: "Produto J",
      code: "J010",
      trayStock: 1000,
      amazonStock: 950,
    },
    {
      action: "Produto K",
      code: "K011",
      trayStock: 1100,
      amazonStock: 1050,
    },
    {
      action: "Produto L",
      code: "L012",
      trayStock: 1200,
      amazonStock: 1150,
    },
  ];

  return (
    <main className="flex items-center justify-center pt-4 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0 w-full px-4">
        <table className="w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">
                Ação
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">
                Código
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">
                Estoque Tray
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider border-b border-gray-300">
                Estoque Amazon
              </th>
            </tr>
          </thead>
          <tbody>
            {stockData.map(({ action, code, trayStock, amazonStock }) => (
              <tr key={code} className="border-b border-gray-300">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {action}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {code}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {trayStock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {amazonStock}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}