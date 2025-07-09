import Breadcrumbs from "../components/Breadcrumbs"
import ActionBar from "../components/ActionBar"
import Button from "../components/ui/Button"

const BookDetails = ({book}) => {
    return(
        <div>
           <div className="fixed bg-white w-full">
                <Breadcrumbs />

                <ActionBar>
                    <Button variant='secondary' size='md'>
                        Edit
                    </Button>

                    <Button variant='danger' size='md'>
                        Delete
                    </Button>  
                </ActionBar>
            </div>

        </div>
    )
}

export default BookDetails