#version 330

out vec4 outputColor;

in vec2 texCoord;

uniform sampler2D texture0;

void main()
{
    vec4 texColor = texture(texture0, texCoord);
    //if (texColor.a == 0) {
    //    discard;
    //}

    outputColor = texColor;
}