import { useState } from "react";
import contacts from './../../contacts.json'
import './Contacts.css'

const ContactsList = () => {

    const contactsCopy = [...contacts]
    const fiveContacts = contactsCopy.slice(0,6)

    const [contactList, setContactList] = useState(fiveContacts)
    const [checkWonEmmy, setCheckEmmy] = useState(true)

    return (
       <>
        <button onClick={()=>alert('alaksdgfjsd')}>Add new contact</button>
       { contactList.map(cont =>
            <table>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Oscar</th>
                    <th>Won Emmy</th>
                </tr>
                <tr>
                    <td><img src={cont.pictureUrl} alt="pic" /></td>
                    <td>{cont.name}</td>
                    <td>{cont.popularity}</td>
                    <td>{cont.wonOscar === true ? '🏆': '' } </td>
                    <td>{cont.wonEmmy === true ?  '🏆' : '' }</td>
                </tr>
            </table>
            
       )}

        </>
    )
}

export default ContactsList