import "./App.css";

function App() {
  return (
    <div className="app">
      <nav>
        <h1>Thorup General Store</h1>
        {/* <div> */}
        <label htmlFor="user-select">User</label>
        <select id="user-select" disabled={true}>
          <option value="lars">Lars</option>
        </select>
        {/* </div> */}
      </nav>
      <main>
        <h2>Basket</h2>
        <table className="order-item-list">
          <thead>
            <tr className="order-item-column-header">
              <th aria-label="product image"></th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr className="order-item">
              <td className="order-item-prop image">
                <img
                  src="https://images.matas.dk/Assets_v3/600001-700000/636001-637000/636601-636700/636640/productlist_v1_x2.jpg"
                  alt="image of C-vitamin, 500mg, 200 stk"
                />
              </td>
              <td className="order-item-prop" data-label="Product">
                C-vitamin, 500mg, 200 stk
              </td>
              <td className="order-item-prop numeric" data-label="Price">
                150,00&nbsp;kr.
              </td>
              <td className="order-item-prop numeric" data-label="Quantity">
                2
              </td>
              <td className="order-item-prop numeric" data-label="Amount">
                225,00&nbsp;kr.
              </td>
            </tr>
            <tr className="order-item">
              <td className="order-item-prop image">
                <img
                  src="https://imgcdn.saxo.com/_9788714195519"
                  alt="image of De små synger"
                />
              </td>
              <td className="order-item-prop" data-label="Product">
                De små synger
              </td>
              <td className="order-item-prop numeric" data-label="Price">
                120,00&nbsp;kr.
              </td>
              <td className="order-item-prop numeric" data-label="Quantity">
                1
              </td>
              <td className="order-item-prop numeric" data-label="Amount">
                121,00&nbsp;kr.
              </td>
            </tr>
            <tr className="order-item">
              <td className="order-item-prop image">
                <img
                  src="https://www.dankaf.dk/Admin/Public/GetImage.ashx?width=800&height=800&crop=5&FillCanvas=True&DoNotUpscale=true&Compression=75&image=/Files/Images/Dankaf/Produkter/4025.png"
                  alt="image of Rørsukker, 1000g"
                />
              </td>
              <td className="order-item-prop" data-label="Product">
                Rørsukker, 1000g
              </td>
              <td className="order-item-prop numeric" data-label="Price">
                40,00&nbsp;kr.
              </td>
              <td className="order-item-prop numeric" data-label="Quantity">
                2
              </td>
              <td className="order-item-prop numeric" data-label="Amount">
                80,00&nbsp;kr.
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="order-total-label" colSpan={3}>
                Total
              </td>
              <td
                className="order-total numeric"
                data-label="Total"
                aria-label="total amount"
              >
                426,00&nbsp;kr.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="note">
          Please note: you can save 10% on your order if the total amount is
          more than 500,00&nbsp;kr.
        </p>
        {/* <div className="basket-actions"> */}
        <button>Let me adjust my order...</button>
        {/* </div> */}
        {/* <div className="checkout-navigation"> */}
        <button className="back">&lt; Shop for more</button>
        <button className="forward">Let me specify my address &gt;</button>
        {/* </div> */}
      </main>
    </div>
  );
}

export default App;
