import UserTable from "./components/UserTable";

const users = [
    {
        "user_id": "U101",
        "username": "shopper123",
        "email": "shopper123@example.com",
        "full_name": "John Doe",
        "age": 28,
        "date_of_birth": "1995-03-15",
        "phone": "555-123-4567",
        "address": "123 Main St, Cityville",
        "is_shopper": true,
        "is_seller": false
    },
    {
        "user_id": "U102",
        "username": "seller456",
        "email": "seller456@example.com",
        "full_name": "Emily Johnson",
        "age": 31,
        "date_of_birth": "1990-09-22",
        "phone": "555-987-6543",
        "address": "456 Elm Ave, Townsville",
        "is_shopper": false,
        "is_seller": true
    },
    {
        "user_id": "U103",
        "username": "avidreader",
        "email": "reader@example.com",
        "full_name": "Alice Smith",
        "age": 33,
        "date_of_birth": "1988-07-10",
        "phone": "555-222-3333",
        "address": "789 Oak Rd, Villageton",
        "is_shopper": true,
        "is_seller": false
    },
    {
        "user_id": "U104",
        "username": "techwizard",
        "email": "tech@example.com",
        "full_name": "Michael Brown",
        "age": 36,
        "date_of_birth": "1985-01-20",
        "phone": "555-444-5555",
        "address": "101 Maple Ave, Techville",
        "is_shopper": true,
        "is_seller": true
    },
    {
        "user_id": "U105",
        "username": "fitnessguru",
        "email": "fitness@example.com",
        "full_name": "Sarah Williams",
        "age": 29,
        "date_of_birth": "1992-12-05",
        "phone": "555-777-8888",
        "address": "202 Gym Street, Fitville",
        "is_shopper": true,
        "is_seller": false
    },
    {
        "user_id": "U106",
        "username": "artlover",
        "email": "art@example.com",
        "full_name": "Daniel Miller",
        "age": 26,
        "date_of_birth": "1997-06-28",
        "phone": "555-666-9999",
        "address": "303 Canvas Rd, Artsburg",
        "is_shopper": true,
        "is_seller": false
    }
    // Add more user objects here...
];

export default function Users() {
    return (
        <section>
            <header>
                <h1 className='text-4xl font-bold'>Users- {users.length}</h1>
            </header>
            <div className='my-4'>
                <UserTable users={users}></UserTable>
            </div>
        </section>
    )
}
