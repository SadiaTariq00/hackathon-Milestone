const form =document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement =document.getElementById('resume-display') as HTMLDivElement;

form.addEventListener('submit' , async (event: Event) =>{
    event.preventDefault();



    const name =(document.getElementById('name') as HTMLInputElement).value
    const email =(document.getElementById('email') as HTMLInputElement).value
    const phone =(document.getElementById('phone') as HTMLInputElement).value
    const objective = (document.getElementById('objective') as HTMLTextAreaElement).value;
    const career = (document.getElementById('career') as HTMLTextAreaElement).value;

    const education =(document.getElementById('education') as HTMLInputElement).value
    const experience =(document.getElementById('experience') as HTMLInputElement).value
    const skills =(document.getElementById('skills') as HTMLInputElement).value

    const profilePicFile = (document.getElementById('profile-pic') as HTMLInputElement).files?.[0];
    let profilePicDataUrl = '';

    
    if (profilePicFile) {
        profilePicDataUrl = await new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(profilePicFile);
        });
    }


    const resumeHTML = `
    <h2>Editable Resume</h2>
    ${profilePicDataUrl ? `<img src="${profilePicDataUrl}" alt="Profile Picture" style="width:150px;height:150px;border-radius:50%;">` : ''}
    <h3>Personal Information</h3>
    <p><b>Name:</b> <span contenteditable="true">${name}</span></p>
    <p><b>Email:</b> <span contenteditable="true">${email}</span></p>
    <p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>
    <h3>Objective</h3>
    <p contenteditable="true">${objective}</p>
    <h3>Career</h3>
    <p contenteditable="true">${career}</p>
    <h3>Education</h3>
    <p contenteditable="true">${education}</p>
    <h3>Experience</h3>
    <p contenteditable="true">${experience}</p>
    <h3>Skills</h3>
    <p contenteditable="true">${skills}</p>
`;

if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else {
    console.error('The resume display element is missing.');
}
  




}
)