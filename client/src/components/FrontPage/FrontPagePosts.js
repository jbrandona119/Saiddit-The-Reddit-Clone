import React from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import CardGroup from 'react-bootstrap/CardGroup'

const styles = {
    button: {
        backgroundColor: "#a0d080"
    },
    headerFooter: {
        backgroundColor: "#bfd72e"
    },

}
function FrontPagePosts(props) {
    const goToPost = () => {
        window.location.href=`/post/${props.postId}`
    }
    return (
        <CardGroup>
            <Card className="text-center">
                <Card.Header style={styles.headerFooter}>{props.title}</Card.Header>
                <Card.Img src={props.link}cap  />
                <Card.Body>
                    <Card.Text>Poster: {props.author}</Card.Text>
                    <Card.Text>
                        {props.postText}
                    </Card.Text>
                    <Button style={styles.button} onClick={goToPost} postID={props.key} variant="primary">Go to Post</Button>
                </Card.Body>
                <Card.Footer style={styles.headerFooter} className="text-muted">Comments: {props.commentCount}   ||   Posted: {props.updated}</Card.Footer>
            </Card>
        </CardGroup>
    )
}

export default FrontPagePosts;