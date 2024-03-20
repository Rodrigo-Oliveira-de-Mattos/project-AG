import MemberCard from "../../components/MemberCard"
import members from "../../util/json/members/members.json"

const Members = () => {
    const member = members.members
    return (
        <section className="cards-members" id="members">
            {member.map((girl) => {
                return (
                    <div className="cards-members__girls" key={girl.id}>
                        <MemberCard
                            age={girl.age}
                            birth={girl.birth}
                            id={girl.id}
                            img={girl.url.img}
                            instagram={girl.url.instagram}
                            name={girl.name}
                            tag={girl.tag}
                            route={girl.route}
                        />
                    </div>
                )
            })}
        </section>
    )
}

export default Members