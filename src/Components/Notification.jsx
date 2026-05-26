function Notification() {

const notifications = [
"Riya liked your post",
"Rahul commented on your post",
"Priya sent a friend request"
];

return (

<div>

<h2>Notifications</h2>

<ul>

{notifications.map((note,index)=>(
<li key={index}>{note}</li>
))}

</ul>

</div>

);

}

export default Notification;