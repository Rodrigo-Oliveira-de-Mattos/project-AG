import styled from "styled-components"
import MemberCard from "../../components/MemberCard"
import members from "../../util/json/members/members.json"

const Members = () => {
    const member = members.members
    return (
        <MemberSection className="cards-members" id="members">
            {member.map((girl) => {
                return (
                    <MembersDiv className="cards-members__girls" key={girl.id}>
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
                    </MembersDiv>
                )
            })}
        </MemberSection>
    )
}

export default Members

const MemberSection = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    min-height: calc(100svh - 100px);
    padding: 4rem 0;
`

const MembersDiv = styled.div`
    text-align: center;
    margin: 0 auto;
`