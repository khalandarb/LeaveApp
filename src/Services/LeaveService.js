import axios from "axios";
const Leave_API_BASE_URL="http://localhost:46044/api/Leaves";

class LeaveService
{
    getLeave()
    {
        return axios.get (Leave_API_BASE_URL);
    }

    getLeaveById (leaveId)
    {
    return axios.get (Leave_API_BASE_URL+'/' +leaveId);
    }

     createLeave(leave)
    {
      return axios.post (Leave_API_BASE_URL ,leave);
    }

    updateLeave(leave, leaveId)
    {
         return axios.put (Leave_API_BASE_URL+"/"+leaveId,leave);
     }

     deleteLeave(leaveId)
    {
     return axios.delete (Leave_API_BASE_URL+"/"+leaveId);
    }
}
export default new LeaveService();