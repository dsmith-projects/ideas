console.log("We got it!");

var baseUrl = 'https://jsonplaceholder.typicode.com/';


function httpGet(url) {
    return new Promise(
        function(resolve, reject) {
            const request = new XMLHttpRequest();
            var title = "";
            var body = "";
            var userId = "";
            var postId = "";
            request.onload = function() {
                if (this.status === 200) {
                    resolve(this.response);
                    var resultsArray = JSON.parse(this.response);
                    //var resultsArray = this.response;

                    for (var i = 0; i < resultsArray.length; i++) {
                        title = resultsArray[i].title;
                        body = resultsArray[i].body;
                        userId = resultsArray[i].userId;
                        postId = resultsArray[i].id;

                        //h4 y small que vive dentro
                        var recentPosts = document.createElement("h4");
                        var small = document.createElement("small");
                        var smallCont = document.createTextNode("RECENT POSTS");
                        small.appendChild(smallCont);
                        recentPosts.appendChild(small);
                        // hr
                        var hr = document.createElement("hr");
                        // h2 y small que vive dentro *** TITLE ****
                        var postTitle = document.createElement("h2");
                        postTitle.setAttribute("id", "post-title");
                        var postTitleCont = document.createTextNode(title);
                        postTitle.appendChild(postTitleCont);
                        // h5 y 2 elementos 'small' que viven dentro *** TITLE ****
                        var h5 = document.createElement("h5");
                        var smallh51 = document.createElement("small");
                        smallh51.setAttribute("class", "glyphicon glyphicon-time");
                        h5.appendChild(smallh51);
                        var h5Cont = document.createTextNode(" Post by user Id:");
                        h5.appendChild(h5Cont);

                        var smallh52 = document.createElement("span");
                        smallh52.setAttribute("id", "userId");
                        var smallh52Cont = document.createTextNode(" " + userId);
                        smallh52.appendChild(smallh52Cont);
                        h5.appendChild(smallh52);

                        var spanPostIdText = document.createElement("span");
                        var spanPostIdTextCont = document.createTextNode(" | Post Id: ");
                        spanPostIdText.appendChild(spanPostIdTextCont);
                        h5.appendChild(spanPostIdText)

                        var spanPostId = document.createElement("span");
                        spanPostId.setAttribute("id", "postId");
                        var spanPostIdCont = document.createTextNode(postId);
                        spanPostId.appendChild(spanPostIdCont);
                        h5.appendChild(spanPostId);

                        // p element
                        var p = document.createElement("p");
                        p.setAttribute("id", "post-body");
                        var pCont = document.createTextNode(body);
                        p.appendChild(pCont);

                        // *** Comment *** p element *** COMMENT
                        var pNumCom = document.createElement("p");
                        var spanpNumCom = document.createElement("span");
                        spanpNumCom.setAttribute("class", "badge");
                        var spanpNumComCont = document.createTextNode("2");
                        spanpNumCom.appendChild(spanpNumComCont);
                        pNumCom.appendChild(spanpNumCom);
                        var spNumComCont = document.createTextNode(" Comments: ");
                        pNumCom.appendChild(spNumComCont);
                        var buttonCom = document.createElement("button");
                        buttonCom.setAttribute("type", "button");
                        buttonCom.setAttribute("class", "btn btn-success btn-xs");
                        //buttonCom.setAttribute("onclick", "loadComments(" + baseUrl + "comments/?postId=" + postId + ")");
                        // buttonCom.addEventListener("click", function() {this, loadComments(baseUrl + "comments/?postId=" + postId);});
                        var buttonComCont = document.createTextNode("Load comments");
                        buttonCom.appendChild(buttonComCont);
                        pNumCom.appendChild(buttonCom);

                        // break line
                        var brLine = document.createElement("br");

                        // div for comments
                        var div4Comments = document.createElement("div");
                        div4Comments.setAttribute("class", "row comments");

                        // break line 2 y 3
                        var brLine2 = document.createElement("br");
                        //var brLine3 = document.createElement("br");

                        var newPost = document.createElement("div");
                        newPost.setAttribute("class", "post");
                        newPost.setAttribute("id", postId);
                        newPost.appendChild(recentPosts);
                        newPost.appendChild(hr);
                        newPost.appendChild(postTitle);
                        newPost.appendChild(h5);
                        newPost.appendChild(p);
                        newPost.appendChild(pNumCom);
                        newPost.appendChild(brLine);
                        newPost.appendChild(div4Comments);
                        newPost.appendChild(brLine2);
                        //newPost.appendChild(brLine3);

                        var postsContainer = document.getElementById("posts");
                        postsContainer.appendChild(newPost);

                        // buttonCom.addEventListener("click", myFunction(baseUrl + "comments/?postId=" + postId));
                        buttonCom.addEventListener("click", function() { ass(event); });
                    }

                } else {
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function() {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            }
            request.open('GET', url);
            request.send();
        }
    );
}

httpGet(baseUrl + 'posts/')
    .then(
        function(value) {
            //console.log('Contents: ', value); 
        },
        function(reason) {
            console.error('Something went wrong: ', reason);
        }
    )
    .catch(
        function(reason) {
            console.error('Something went wrong: ', reason);
        }
    );

var ass = function myFunction1(event) {
    var x = event.target;
    var y = x.parentNode.parentNode;
    console.log("This is y: " + y.id);
    var postId = document.getElementById(y.id);
    loadComments(baseUrl + "comments/?postId=" + y.id);

    function loadComments(url) {
        console.log("vamo bien");
        return new Promise(
            function(resolve, reject) {
                const request = new XMLHttpRequest();
                var postId = "";
                var id = "";
                var name = "";
                var email = "";
                var body = "";

                request.onload = function() {
                    if (this.status === 200) {
                        resolve(this.response);
                        var resultsArray = JSON.parse(this.response);
                        //var resultsArray = this.response;

                        for (var i = 0; i < resultsArray.length; i++) {
                            postId = resultsArray[i].postId;
                            id = resultsArray[i].id;
                            name = resultsArray[i].name;
                            email = resultsArray[i].email;
                            body = resultsArray[i].body;


                            //div and img for avatar
                            var divImg = document.createElement("div");
                            divImg.setAttribute("class", "col-sm-2 text-center");
                            var imgAvatar = document.createElement("img");
                            imgAvatar.setAttribute("src", "imgs/avatar-young-man.png");
                            imgAvatar.setAttribute("class", "img-circle");
                            imgAvatar.setAttribute("height", "65");
                            imgAvatar.setAttribute("width", "65");
                            imgAvatar.setAttribute("alt", "Avatar");
                            divImg.appendChild(imgAvatar);

                            // div, h4, small, and p for comment
                            var divComm = document.createElement("div");
                            divComm.setAttribute("class", "col-sm-10");
                            var h4Name = document.createElement("h4");
                            var h4NameCont = document.createTextNode(name + " ");
                            h4Name.appendChild(h4NameCont);
                            var smallEmail = document.createElement("small");
                            var smallEmailCont = document.createTextNode(email + " | ");
                            smallEmail.appendChild(smallEmailCont);
                            h4Name.appendChild(smallEmail);
                            var smallCommentId = document.createElement("small");
                            var smallCommentIdCont = document.createTextNode("Comment id: " + id);
                            smallCommentId.appendChild(smallCommentIdCont);
                            h4Name.appendChild(smallCommentId);
                            divComm.appendChild(h4Name);
                            var pComment = document.createElement("p");
                            var pCommentCont = document.createTextNode(body);
                            pComment.appendChild(pCommentCont);
                            divComm.appendChild(pComment);

                            // h2 y small que vive dentro *** TITLE ****
                            var divContainerComm = document.createElement("div");
                            divContainerComm.setAttribute("class", "comment");
                            divContainerComm.appendChild(divImg);
                            divContainerComm.appendChild(divComm);


                            var commentsDiv = document.getElementById(postId);
                            commentsDiv.appendChild(divContainerComm);
                            //newPost.appendChild(commentsDiv);
                        }
                    } else {
                        reject(new Error(this.statusText));
                    }
                };
                request.onerror = function() {
                    reject(new Error('XMLHttpRequest Error: ' + this.statusText));
                }
                request.open('GET', url);
                request.send();
            }
        );
    }
    // var h1 = document.createElement("h1");
    // var h1Cont = document.createTextNode("testsssss: " + y.id);
    // h1.appendChild(h1Cont);
    //var diVContent = document.createTextNode("testsssss");
    // postId.appendChild(h1);

}

var myFunction;
myFunction = function loadComments(url) {
    console.log("vamo bien");
    return new Promise(
        function(resolve, reject) {
            const request = new XMLHttpRequest();
            var postId = "";
            var id = "";
            var name = "";
            var email = "";
            var body = "";

            request.onload = function() {
                if (this.status === 200) {
                    resolve(this.response);
                    var resultsArray = JSON.parse(this.response);
                    //var resultsArray = this.response;

                    for (var i = 0; i < resultsArray.length; i++) {
                        postId = resultsArray[i].postId;
                        id = resultsArray[i].id;
                        name = resultsArray[i].name;
                        email = resultsArray[i].email;
                        body = resultsArray[i].body;


                        //div and img for avatar
                        var divImg = document.createElement("div");
                        divImg.setAttribute("class", "col-sm-2 text-center");
                        var imgAvatar = document.createElement("img");
                        imgAvatar.setAttribute("src", "imgs/avatar-young-man.png");
                        imgAvatar.setAttribute("class", "img-circle");
                        imgAvatar.setAttribute("height", "65");
                        imgAvatar.setAttribute("width", "65");
                        imgAvatar.setAttribute("alt", "Avatar");
                        divImg.appendChild(imgAvatar);

                        // div, h4, small, and p for comment
                        var divComm = document.createElement("div");
                        divComm.setAttribute("class", "col-sm-10");
                        var h4Name = document.createElement("h4");
                        var h4NameCont = document.createTextNode(name + " ");
                        h4Name.appendChild(h4NameCont);
                        var smallEmail = document.createElement("small");
                        var smallEmailCont = document.createTextNode(email + " | ");
                        smallEmail.appendChild(smallEmailCont);
                        h4Name.appendChild(smallEmail);
                        var smallCommentId = document.createElement("small");
                        var smallCommentIdCont = document.createTextNode("Comment id: " + id);
                        smallCommentId.appendChild(smallCommentIdCont);
                        h4Name.appendChild(smallCommentId);
                        divComm.appendChild(h4Name);
                        var pComment = document.createElement("p");
                        var pCommentCont = document.createTextNode(body);
                        pComment.appendChild(pCommentCont);
                        divComm.appendChild(pComment);

                        // h2 y small que vive dentro *** TITLE ****
                        var divContainerComm = document.createElement("div");
                        divContainerComm.setAttribute("class", "comment");
                        divContainerComm.appendChild(divImg);
                        divContainerComm.appendChild(divComm);


                        var commentsDiv = document.getElementById(postId);
                        commentsDiv.appendChild(divContainerComm);
                        //newPost.appendChild(commentsDiv);
                    }
                } else {
                    reject(new Error(this.statusText));
                }
            };
            request.onerror = function() {
                reject(new Error('XMLHttpRequest Error: ' + this.statusText));
            }
            request.open('GET', url);
            request.send();
        }
    );
}