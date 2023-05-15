import css from "./TransactionHistory.module.css";
import PropTypes from "prop-types";


export const TransactionHistory = ({ items }) => {
    return (<div className={css.borderWrap}>
        <table className={css.transactionHistory}>
           <thead className={css.thead}>
             <tr className={css.trh}>
               <th className={css.th}>Type</th>
               <th className={css.th}>Amount</th>
               <th className={css.th}>Currency</th>
             </tr>
           </thead>
           <tbody>
           {items.map(item => {
               return <tr className={css.tr} key={item.id}>
                        <td className={css.tb}>{item.type}</td>
                        <td className={css.tb}>{item.amount}</td>
                        <td className={css.tb}>{item.currency}</td>
                      </tr>
               })
           }
           </tbody>
         </table>
      </div>        
    )
}

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
    }).isRequired,
    ).isRequired,
}