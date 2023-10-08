clc;close all;
clear all;
clear('c');
c=webcam;
load('netTransfer.mat')            
faceDetector=vision.CascadeObjectDetector;         %capturing the image
i=0;
while i<50                                    %running the loop for 20 images
    e=c.snapshot;                                  
    bboxes =step(faceDetector,e);                   %detecting face                
    if(sum(sum(bboxes))~=0)                        %if face is present 
     es=imcrop(e,bboxes(1,:));                      %cropping the face part
    es=imresize(es,[227 227]);                        %resizing to 227*227
    label=classify(netTransfer,es);                        %classifying the network
    image(e);
    title(char(label),'color','black');
    drawnow;
    i=i+1;
    else                                              %if face is not present
        image(e);
        title('No Face Detected');
    end
end