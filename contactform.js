<script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = '<?php'+nl+nl+
	'if(isset($_POST[\'submit\'])){'+nl+
	'	$name = $_POST[\'name\'];'+nl+
	'	$mailFrom = $_POST[\'mail\'];'+nl+
	'	$subject = $_POST[\'subject\'];'+nl+
	'	$message = $_POST[\'message\'];'+nl+nl+
	'	$mailTo = "cyn.mart@outlook.com";'+nl+
	'	$headers = "From: ". $mailFrom;'+nl+
	'	$txt = "You have received an email from " . $name.".\\n\\n".$message;'+nl+nl+
	'	mail($mailTo, $subject, $txt, $headers);'+nl+
	'	header("Location: index.html?mailsend");'+nl+nl+
	'}'+nl+nl+nl+
	'?>'

document.write(pagecode);

</script>