import DropdownField from "@/components/DropdownField"
import TextFieldAnswer from "@/components/TextFieldAnswer"
import TextFieldQuestion from "@/components/TextFieldQuestion"

export default function Question() {
    return (
        <div>
            {/* <TextFieldQuestion /> */}
            {/* <DropdownField /> */}
            <TextFieldAnswer name={"Do you like react?"} placeholder={"yes i do"} />
        </div>
    )
}