import { isCompositeComponentWithType } from "react-dom/test-utils";
import ActorCard from "../../components/ActorCard";

function ActorIndex({ movies }) {
    const allActors = movies.map((ele, idx) => ele = ele.cast).flat().sort()
    let actorsNoDupes = [];
    let previousActor
    allActors.forEach(function (ele) {
        if (ele != previousActor) {
            actorsNoDupes.push(ele);
            previousActor = ele;
        };
    });

    return (
        <>
            <h1>Actor Index</h1>
            <div className="ActorIndex">
                {actorsNoDupes.map((ele, idx) => <ActorCard actor={ele} key={idx} />)}
            </div>
        </>
    );
};

export default ActorIndex;