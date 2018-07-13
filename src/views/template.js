module.exports = ({ body, title, props }) => {
    props = JSON.stringify(props)
    return `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>${title}</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700" rel="stylesheet">
        <link href="/bundle.css" rel="stylesheet">
    </head>

    <body>
        <div id="app">${body}</div>
        <script>var props="${escape(props)}"</script>
        <script src="/bundle.js"></script>
    </body>
</html>
`
}
