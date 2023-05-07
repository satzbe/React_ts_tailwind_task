export interface ButtonProps {
  name: string;
  primary: boolean;
  action: () => void;
  additionalClass?: string
}

export interface commonProps {
  jobTitle: string;
  company: string;
  industry: string;
}
export interface CardProps extends commonProps {
  location: string;
  workType: string;
  type: string;
  minexperience: string;
  maxexperience: string;
  minsalary: string;
  maxsalary: string;
  employees: string;
  id: string
  setLoader: (load: boolean) => void
}

export interface FormDataProps extends commonProps {
  location: string;
  workType: string;
  type: string;
  minexperience: string;
  maxexperience: string;
  minsalary: string;
  maxsalary: string;
  employees: string;
  id: string
}

export interface ModalProps {
  visible: boolean
  showClose: boolean
  closeModal: (open: boolean) => void
  children: JSX.Element
}

export interface PopupProp {
  modalopenclose: (arg0: boolean) => void;
}



export interface inputProps {
  label: string
  necessary: boolean
  change: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeHolder: string
  id: string
  value: string
  error?: string
}

export interface RadioProps {
  selected: string
  change: (e: React.ChangeEvent<HTMLInputElement>) => void
}